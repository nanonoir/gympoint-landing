interface CheckboxGroupProps {
  label: string;
  options: readonly string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  helperText?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  helperText,
}) => {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        {label}
      </label>
      {helperText && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`
              flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer
              transition-all
              ${
                selectedValues.includes(option)
                  ? 'border-secondary bg-secondary/10'
                  : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
              }
            `}
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => handleToggle(option)}
              className="w-4 h-4 text-secondary focus:ring-secondary"
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};