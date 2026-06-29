import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import MembersTable from "../../components/members/MembersTable";
import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";

function Members() {
  const [search, setSearch] = useState("");

  return (
    <DashboardLayout>

      <PageHeader
        title="Members"
        subtitle="Manage all society members."
        buttonText="+ Add Member"
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

      <MembersTable />

    </DashboardLayout>
  );
}

export default Members;