import React from 'react';
import { Input, Text } from '@nextui-org/react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import products from '@/utils/products';
function SearchBar() {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const hintsRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [query, setQuery] = React.useState<string>('');
  const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>(
    []
  );
  // const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState<
    string | null
  >(null);
  React.useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    // setSelectedIndex(-1);
  }, [query]);
  function setInputValue(title: IProduct['title']) {
    setQuery(title);
    setSelectedSuggestion(title);
    inputRef.current?.focus();
    setIsFocused(false);
    // setSelectedIndex(-1);
  }
  // function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
  //   if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
  //     event.preventDefault();
  //     const indexDelta = event.key === 'ArrowDown' ? 1 : -1;
  //     setSelectedIndex(
  //       (selectedIndex + indexDelta + filteredProducts.length) %
  //         filteredProducts.length
  //     );
  //   } else if (event.key === 'Enter' && selectedIndex >= 0) {
  //     setInputValue(filteredProducts[selectedIndex].title);
  //   }
  // }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSuggestion) {
        setQuery(selectedSuggestion);
        setSelectedSuggestion(null);
        setIsFocused(false);
      } else {
        handleSubmit(e as any);
      }
    } else if (e.key === 'ArrowDown' && hintsRef.current) {
      const nextIndex =
        filteredProducts.findIndex((p) => p.title === selectedSuggestion) + 1;
      const nextSuggestion =
        nextIndex >= filteredProducts.length
          ? null
          : filteredProducts[nextIndex].title;
      setSelectedSuggestion(nextSuggestion);
      const nextSuggestionElement =
        nextSuggestion &&
        hintsRef.current.querySelector(`[title="${nextSuggestion}"]`);
      if (nextSuggestionElement) {
        nextSuggestionElement.scrollIntoView({ block: 'nearest' });
      }
    } else if (e.key === 'ArrowUp' && hintsRef.current) {
      const nextIndex =
        filteredProducts.findIndex((p) => p.title === selectedSuggestion) - 1;
      const nextSuggestion =
        nextIndex < 0 ? null : filteredProducts[nextIndex].title;
      setSelectedSuggestion(nextSuggestion);
      const nextSuggestionElement =
        nextSuggestion &&
        hintsRef.current.querySelector(`[title="${nextSuggestion}"]`);
      if (nextSuggestionElement) {
        nextSuggestionElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedSuggestion) {
      setQuery(selectedSuggestion);
      setSelectedSuggestion(null);
    } else {
      inputRef.current?.blur();
      router.push('/search?q=' + query);
      setQuery('');
    }
  }

  return (
    <div className='relative'>
      <form action='/search' onSubmit={handleSubmit}>
        <Input
          aria-label='Ara'
          ref={inputRef}
          clearable
          contentRightStyling={false}
          placeholder='Search...'
          contentRight={
            <FiSearch
              type='submit'
              onClick={() => router.push('/search?q=' + query)}
              className='mr-2'
            />
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 120);
          }}
          onKeyDown={handleKeyDown}
        />
      </form>
      {isFocused && (
        <div
          ref={hintsRef}
          className='absolute top-[50px] border w-full overflow-y-scroll max-h-[10rem] 
        shadow-xl bg-[rgb(237,240,243)] rounded-xl divide-y [&_*]:p-2 '
        >
          {filteredProducts.map((p, index) => (
            <Text
              key={index}
              size={'$sm'}
              onClick={() => setInputValue(p.title)}
              className={`cursor-pointer hover:bg-slate-50 ${
                selectedSuggestion === p.title ? 'bg-slate-50' : ''
              }`}
              title={p.title}
            >
              {p.title}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
