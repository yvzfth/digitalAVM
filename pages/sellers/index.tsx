import { Button, Text } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

interface ProductFormState {
  caption: string;
  description: string;
  thumbnail: string;
  descriptionImage: string;
  content: string;
  category_id: string;
  price: number | null;
  stock: number | null;
}

const initialFormState: ProductFormState = {
  caption: '',
  description: '',
  thumbnail: '',
  descriptionImage: '',
  content: '',
  category_id: '',
  price: null,
  stock: null,
};

const ProductForm = () => {
  const [formState, setFormState] =
    useState<ProductFormState>(initialFormState);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit form data
    await axios
      .post('/api/product', {
        data: formState,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success('Ürün eklendi');
          setFormState(initialFormState);
        }
      });
  };
  React.useEffect(() => {
    async function getCategories() {
      await axios.get('/api/category').then((res) => setCategories(res.data));
    }

    getCategories();
  }, [categories]);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col [&_input]:p-2 [&_input]:border [&_input]:rounded-md w-[16rem] gap-2 container mx-auto'
    >
      <Text className='text-xl'>New Product</Text>

      <input
        type='text'
        placeholder='Caption'
        name='caption'
        value={formState.caption}
        onChange={handleInputChange}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={formState.description}
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Thumbnail'
        name='thumbnail'
        value={formState.thumbnail}
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Description Image'
        name='descriptionImage'
        value={formState.descriptionImage}
        onChange={handleInputChange}
      />
      <textarea
        className='p-2 border rounded-md'
        placeholder='Content'
        name='content'
        value={formState.content}
        onChange={handleInputChange}
      ></textarea>
      <select
        className='p-2 border rounded-md'
        id='category'
        value={formState.category_id}
        onChange={(e) =>
          setFormState({ ...formState, category_id: e.target.value })
        }
      >
        <option value='' disabled defaultValue={''}>
          Select a category
        </option>
        {categories?.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type='number'
        placeholder='Price'
        name='price'
        value={formState.price!}
        onChange={handleInputChange}
      />
      <input
        type='number'
        placeholder='Stock'
        name='stock'
        value={formState.stock!}
        onChange={handleInputChange}
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default ProductForm;
