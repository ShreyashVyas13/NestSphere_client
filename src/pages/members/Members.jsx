import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";
import DataTable from "../../components/common/DataTable";
import AddMemberDrawer from "../../components/members/AddMemberDrawer";
import { getMembers, deleteMember } from "../../services/memberService";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";
import DeleteConfirmDialog from "../../components/common/DeleteConfirmDialog";

function Members() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  const loadMembers = async () => {
    try {
      setLoading(true);

      const data = await getMembers();

      setMembers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!memberToDelete) return;

    try {
      const response = await deleteMember(memberToDelete._id);

      toast.success(response.message);

      setDeleteDialogOpen(false);

      setMemberToDelete(null);

      loadMembers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete member.");
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const filteredMembers = members.filter((member) =>
    member.fullName?.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    {
      header: "Name",
      accessorKey: "fullName",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Mobile",
      cell: ({ row }) => row.original.mobile || row.original.phone || "-",
    },
    {
      header: "Flat",
      cell: ({ row }) => {
        const flat = row.original.flat;

        if (!flat) {
          return <span className="text-gray-400">N/A</span>;
        }

        return (
          <span className="font-medium">
            {flat.block}-{String(flat.flatNo).padStart(3, "0")}
          </span>
        );
      },
    },
    {
      header: "Member Type",
      accessorKey: "memberType",
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.original.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      header: "Actions",

      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setSelectedMember(row.original);
              setIsEditMode(true);
              setOpenDrawer(true);
            }}
          >
            <Pencil size={18} className="text-blue-600 hover:text-blue-800" />
          </button>

          <button
            onClick={() => {
              setMemberToDelete(row.original);
              setDeleteDialogOpen(true);
            }}
          >
            <Trash2 size={18} className="text-red-600 hover:text-red-800" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title="Members"
        subtitle="Manage all society members."
        buttonText="+ Add Member"
        onButtonClick={() => setOpenDrawer(true)}
      />

      <div className="mb-6">
        <SearchBar
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <DataTable columns={columns} data={filteredMembers} loading={loading} />

      <AddMemberDrawer
        open={openDrawer}
        onOpenChange={(value) => {
          setOpenDrawer(value);

          if (!value) {
            setSelectedMember(null);
            setIsEditMode(false);
          }
        }}
        onMemberAdded={loadMembers}
        member={selectedMember}
        isEditMode={isEditMode}
      />
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete Member"
        description={
          memberToDelete
            ? `Are you sure you want to delete "${memberToDelete.fullName}"?`
            : ""
        }
        onConfirm={handleDelete}
      />
    </DashboardLayout>
  );
}

export default Members;
