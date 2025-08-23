import AddProductForm from "./Components/AddProductForm/AddProductForm";

export const metadata = {
  title: "Add Product | Dashboard",
};


export default function AddProductPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Add New Product</h2>
      <AddProductForm />
    </div>
  );
}
