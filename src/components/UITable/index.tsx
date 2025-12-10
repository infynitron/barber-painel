export * from "@/components/UITable/Header";

export interface ITableColumn {
  property: string;
  label: string;
  align?: "left" | "center" | "right";
}
