export interface Products {
    id: number;
    title: string;
    price: number;
    star: number;
    duration: string;
    author?: string;
  }

  export interface CoursePropType {
    currentPage: number;
    number_of_pages: number;
    currentItems: Products[];
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  }