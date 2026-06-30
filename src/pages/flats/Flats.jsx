import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";
import DataTable from "../../components/common/DataTable";
import AddFlatDrawer from "../../pages/flats/AddFlatDrawer";

import { toast } from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";

import { getFlats, deleteFlat } from "../../services/flatService";

function Flats() {
  const [search, setSearch] = useState("");

  const [openDrawer, setOpenDrawer] = useState(false);

  const [flats, setFlats] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedFlat, setSelectedFlat] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this flat?",
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteFlat(id);

      toast.success(response.message);

      fetchFlats();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to delete flat.");
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
    {
      header: "Actions",

      cell: ({ row }) => (
        <div className="flex gap-3">
          <button
            onClick={() => {
              setSelectedFlat(row.original);
              setIsEditMode(true);
              setOpenDrawer(true);
            }}
          >
            <Pencil size={18} className="text-blue-600 hover:text-blue-800" />
          </button>

          <button onClick={() => handleDelete(row.original._id)}>
            <Trash2 size={18} className="text-red-600 hover:text-red-800" />
          </button>
        </div>
      ),
    },
  ];

  // ===============================

  const filteredFlats = flats.filter((flat) => {
    const keyword = search.toLowerCase();

    return (
      flat.block.toLowerCase().includes(keyword) ||
      `${flat.block}-${String(flat.flatNo).padStart(3, "0")}`
        .toLowerCase()
        .includes(keyword)
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
        onOpenChange={(value) => {
          setOpenDrawer(value);

          if (!value) {
            setSelectedFlat(null);
            setIsEditMode(false);
          }
        }}
        onFlatAdded={fetchFlats}
        flat={selectedFlat}
        isEditMode={isEditMode}
      />
    </DashboardLayout>
  );
}

export default Flats;
