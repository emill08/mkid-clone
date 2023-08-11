export default function TableProduct() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created By</th>
                            <th>Main Image</th>
                            <th>Images</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1.</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Akko Crystal Blue</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Switch
                            </td>
                            <td>5500</td>
                            <td>ujank</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://picsum.photos/200" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">Show Images</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">Edit</button>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </>
    )
}