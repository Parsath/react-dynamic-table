import DynamicTable from "../components/table/dynamicTable";

export default function Tables() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main>
        {/* 3 possible themes: cyberpunk / dark / no theme (default) */}
        <DynamicTable theme="cyberpunk">
        </DynamicTable>
      </main>
    </div>
  )
}
