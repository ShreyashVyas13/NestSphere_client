function MembersTable() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="text-left px-6 py-4">Name</th>

            <th className="text-left px-6 py-4">Flat</th>

            <th className="text-left px-6 py-4">Type</th>

            <th className="text-left px-6 py-4">Phone</th>

            <th className="text-left px-6 py-4">Status</th>

            <th className="text-left px-6 py-4">Action</th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-t">

            <td className="px-6 py-5">Rahul Sharma</td>

            <td className="px-6 py-5">A-101</td>

            <td className="px-6 py-5">Owner</td>

            <td className="px-6 py-5">9876543210</td>

            <td className="px-6 py-5">

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Active
              </span>

            </td>

            <td className="px-6 py-5">

              <button className="text-blue-600 mr-4">
                Edit
              </button>

              <button className="text-red-600">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default MembersTable;