export * from "@/components/UITable/Header";
export * from "@/components/UITable/Loading";
export * from "@/components/UITable/Empty";

export interface ITableColumn {
  property: string;
  label: string;
  align?: "left" | "center" | "right";
}
