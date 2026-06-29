import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";
import DataTable from "../../components/common/DataTable";
import AddFlatDrawer from "../../pages/flats/AddFlatDrawer";

import { getFlats } from "../../services/flatService";

import { toast } from "react-hot-toast";

function Flats() {
  const [search, setSearch] = useState("");

  const [openDrawer, setOpenDrawer] = useState(false);

  const [flats, setFlats] = useState([]);

  const [loading, setLoading] = useState(true);

  // ===============================
  // Fetch Flats
  // ===============================

  const fetchFlats = async () => {
    try {
      setLoading(true);

      const response = await getFlats();

      setFlats(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load flats.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  // ===============================
  // Table Columns
  // ===============================

  const columns = [
    {
      header: "Block",
      accessorKey: "block",
    },
    {
      header: "Flat Number",
      cell: ({ row }) => (
        <span className="font-medium">
          {row.original.block}-{String(row.original.flatNo).padStart(3, "0")}
        </span>
      ),
    },
    {
      header: "Floor",
      accessorKey: "floor",
    },
    {
      header: "BHK",
      accessorKey: "bhkType",
    },
    {
      header: "Area",
      accessorKey: "area",
      cell: ({ row }) => <span>{row.original.area} sq.ft</span>,
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            row.original.status === "Occupied"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
  ];

  // ===============================

  const filteredFlats = flats.filter((flat) => {
    const keyword = search.toLowerCase();

    return (
      flat.block.toLowerCase().includes(keyword) ||
      flat.flatNumber.toLowerCase().includes(keyword)
    );
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Flats"
        subtitle="Manage all flats in your society."
        buttonText="+ Add Flat"
        onButtonClick={() => setOpenDrawer(true)}
      />

      <div className="mb-6">
        <SearchBar
          placeholder="Search by Block or Flat Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="bg-white rounded-xl p-10 shadow text-center">
          Loading Flats...
        </div>
      ) : (
        <DataTable columns={columns} data={filteredFlats} />
      )}

      <AddFlatDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        onFlatAdded={fetchFlats}
      />
    </DashboardLayout>
  );
}

export default Flats;
