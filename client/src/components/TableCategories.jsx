export default function TableCategory() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1.</td>
                            <td>
                                Switch
                            </td>
                            <td>
                                2023-07-10
                            </td>
                            <td>2023-07-10</td>
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