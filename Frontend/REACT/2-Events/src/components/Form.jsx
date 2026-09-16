function handlePageReset(e) {
    console.log("Form got submitted. And preventDefault() refresh");
    e.preventDefault();    
}

const Form = () => {
    return <form onSubmit={handlePageReset}>
        <input id="form-submit" type="submit" value={"Click to Submit"} />
    </form>
}

export default Form;