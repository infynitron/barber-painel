export * from "@/components/UITable/Header";
export * from "@/components/UITable/Card";
export * from "@/components/UITable/Loading";
export * from "@/components/UITable/Empty";
export * from "@/components/UITable/Footer";

export interface ITableColumn {
  property: string;
  label: string;
  align?: "left" | "center" | "right";
}
