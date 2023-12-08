import { useParams, useSearchParams } from "react-router-dom"

export const UserDetails = () => {
    const { userId } = useParams();
    const  [searchParams] = useSearchParams();
    return (
        <section>
            <h1>This is a User Details</h1>
            <h2>USER ID: { userId }</h2>
            <h2>Query: { searchParams.get("name")} and { searchParams.get("email")} </h2>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita labore quis, mollitia id, est provident esse tempore quae nihil sit officia et reprehenderit culpa, repellat harum! Sed numquam at adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint quam voluptate, officiis libero ut exercitationem, nisi quae quidem perferendis, accusantium necessitatibus quia tempora rem quo culpa voluptas dolor obcaecati!
            </div>
        </section>
    )
}