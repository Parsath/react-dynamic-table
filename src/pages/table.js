import EnhancedDynamicTable from "../components/table/enhancedDynamicTable";

export default function Tables() {
  return (
    <main className="h-screen">
      {/* 3 possible themes: cyberpunk / tailwind / dark / no theme (default) */}
      <EnhancedDynamicTable theme="dark">
      </EnhancedDynamicTable>
    </main>
  )
}
