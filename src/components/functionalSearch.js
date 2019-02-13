

const functionalSearch = ({ value, onChange, children })=>
    <form>
        {children}<input
        type="text"
        value="value"
        onChange={onChange}
        >
        </input>
    </form>