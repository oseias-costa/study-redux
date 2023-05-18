
export function UserForm() {
    return (
        <form>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />

            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />

            <button>Save</button>
        </form>
    )
}
