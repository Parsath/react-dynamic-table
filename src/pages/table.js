import EnhancedDynamicTable from "../components/table/enhancedDynamicTable";

export default function Tables() {
  return (
    <main className="h-screen">
      {/* 3 possible themes: cyberpunk / dark / no theme (default) */}
      <EnhancedDynamicTable theme="cyberpunk">
      </EnhancedDynamicTable>
    </main>
  )
}
