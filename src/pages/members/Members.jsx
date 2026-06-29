import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";
import DataTable from "../../components/common/DataTable";

import AddMemberDrawer from "../../components/members/AddMemberDrawer";

import { getMembers } from "../../services/memberService";

function Members() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

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

  useEffect(() => {
    loadMembers();
  }, []);

  const filteredMembers = members.filter((member) =>
    member.fullName
      ?.toLowerCase()
      .includes(search.toLowerCase())
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
      cell: ({ row }) =>
        row.original.mobile || row.original.phone || "-",
    },
    {
      header: "Flat",
      cell: ({ row }) => {
        const flat = row.original.flat;

        if (!flat) {
          return (
            <span className="text-gray-400">
              N/A
            </span>
          );
        }

        return (
          <span className="font-medium">
            {flat.block}-
            {String(flat.flatNo).padStart(3, "0")}
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
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredMembers}
        loading={loading}
      />

      <AddMemberDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        onMemberAdded={loadMembers}
      />
    </DashboardLayout>
  );
}

export default Members;