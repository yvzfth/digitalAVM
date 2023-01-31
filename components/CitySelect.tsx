import cities from '@/lib/cities';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

const CitySelect = ({
  city,
  handleSelectChange,
}: {
  city: string;
  handleSelectChange: (event: SelectChangeEvent<string>) => void;
}) => {
  return (
    <FormControl className=' w-[16rem]'>
      <InputLabel id='city-select-label'>Şehir seçiniz</InputLabel>
      <Select
        labelId='city-select-label'
        id='city-select'
        name='city'
        value={city!}
        onChange={handleSelectChange}
        input={<OutlinedInput label='Şehir seçiniz' />}
      >
        {Object.values(cities).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelect;
