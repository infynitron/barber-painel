import { SearchIcon } from "lucide-react";

interface SearchProps {
  placeholder?: string;
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}

export const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder,
}: SearchProps) => {
  return (
    <div className="relative">
      <SearchIcon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={18}
      />

      <input
        className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1c] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200"
        type="text"
        placeholder={
          placeholder ?? "Buscar por cliente, barbeiro ou serviço..."
        }
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};
