export type TTodo = {
  id: number;
  text: string;
  isActive: boolean;
};

export type Filter = "all" | "active" | "completed";
