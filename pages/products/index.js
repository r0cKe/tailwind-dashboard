import {
  CheckIcon,
  PlusCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import UserDataTable from "@/components/UserDataTable";
import Head from "next/head";
import { products } from "@/utils/data";
import AddUser from "@/components/Modules/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductModal } from "@/redux/features/modal/toggleModalSlice";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      if (!params.row?.img) {
        return <UserCircleIcon className="w-8 h-8 rounded-full" />;
      }
      return (
        <img
          src={params.row?.img}
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    renderCell: (params) => {
      if (params.row?.inStock) {
        return <CheckIcon className="w-5 h-5 text-success" />;
      }
      return <XMarkIcon className="w-5 h-5 text-danger" />;
    },
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.toggleProductModal);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main>
        {isModalOpen && (
          <AddUser reducer={toggleProductModal} slug="user" columns={columns} />
        )}
        <div className="flex items-center gap-5 mb-3">
          <h1 className="text-4xl font-bold">Products</h1>
          <button
            className="flex items-center gap-1 bg-soft text-dark text-sm p-1 rounded-md cursor-pointer transition-all duration-150 hover:bg-primary hover:text-soft"
            onClick={() => dispatch(toggleProductModal())}
          >
            <PlusCircleIcon className="w-6 h-6" /> New Product
          </button>
        </div>
        <UserDataTable
          slug="products"
          columns={columns}
          rows={products}
          pageSize={10}
        />
      </main>
    </>
  );
}
