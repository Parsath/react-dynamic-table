import DynamicTable from "../src/DynamicTable";

export default function GameInventory() {
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
