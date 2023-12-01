export interface SelectProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  list: selectFrame[];
  defaultValue?: string;
}
interface selectFrame {
  name: string;
  url: string;
}
// filter types
export interface Filter {
  isCollapsed?: boolean;
  category: string;
  source: string;
  search: string;
  date: string;
  author?: string;
}

export type FilterActions =
  | { type: "TOGGLE_COLLAPSE" }
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_SOURCE"; payload: string }
  | { type: "SET_SELECTED_DATE"; payload: string }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_ALL"; payload: Filter }
  | { type: "RESET" };

// Article states

export interface AppState {
  articles: Article[];
  filters: Filter;
  loading: boolean;
}

export interface Article {
  title: string;
  description: string;
  // Add more properties as needed
}
export type AppActions =
  | { type: "SET_ARTICLES"; payload: Article[] }
  | { type: "SET_LOADING"; payload: boolean }
  | {
      type: "SET_FILTER";
      payload: Filter;
    };
