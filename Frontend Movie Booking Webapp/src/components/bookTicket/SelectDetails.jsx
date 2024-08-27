import React from "react";
import Select from "react-select";
import styled from "styled-components";

// Custom styles for react-select
const customStyles = {
  container: (provided) => ({
    ...provided,
    marginLeft: "0.5rem",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #d1d5db", // Tailwind gray-300
    boxShadow: "none",
    borderRadius: "0.375rem", // Tailwind rounded-md
    "&:hover": {
      border: "1px solid #3b82f6", // Tailwind blue-500
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280", // Tailwind gray-500
  }),
  input: (provided) => ({
    ...provided,
    padding: "5px", // Remove default padding if needed
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 10px 0 10px",
    flexWrap: "wrap", // Ensure values wrap properly
  }),
};

const SelectWrapper = styled.div.attrs({
  className: "flex text-base p-1 pl-2 bg-gray-100 rounded-lg",
})``;

const SelectDetails = ({
  label,
  id,
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <SelectWrapper>
      <label htmlFor={id} className="self-center text-lg">
        {label}
      </label>
      <Select
        id={id}
        options={options}
        value={value}
        onChange={onChange}
        styles={customStyles}
        placeholder={placeholder}
      />
    </SelectWrapper>
  );
};

export default SelectDetails;
