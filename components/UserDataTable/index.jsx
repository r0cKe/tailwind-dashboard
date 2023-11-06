import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Link from "next/link";
import { setUsers } from "@/redux/features/user/usersSlice";
import { useDispatch } from "react-redux";

const UserDataTable = ({ slug, pageSize = 5, ...props }) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    if (slug === "users") {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      const users = await res.json();
      dispatch(setUsers(users));
      console.log(`${slug} ${id} has been deleted!`);
    }
  };

  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="flex gap-3">
          <Link href={`/${slug}/${params.row?.id}`}>
            <PencilSquareIcon className="w-5 h-5 text-success cursor-pointer transition-all duration-300 hover:scale-110 " />
          </Link>
          <TrashIcon
            className="w-5 h-5 text-danger cursor-pointer transition-all duration-300 hover:scale-110 "
            onClick={() => handleDelete(params.row?.id)}
          />
        </div>
      );
    },
  };

  return (
    <div>
      <DataGrid
        className="bg-white p-5"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default UserDataTable;
