import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log("===== data:", data);

  return (
    <div>
      <h1>REACT HOOK FORM</h1>

      {/* FORM */}
      <div style={{ padding: "20px", borderRadius: "5px", background: "#FFF", border: "2px solid #EEE" }}>
        
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={ handleSubmit(onSubmit) } style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}>

          {/* register your input into the hook by invoking the "register function" */}
          <label htmlFor="name">Name</label>
          <input defaultValue="Your Name" { ...register("name") } />

          {/* include validation with required or other standard HTML validation rules */}
          <label htmlFor="address">Address</label>
          <input { ...register("address", { required: true }) } />

          {/* errors will return when field validation fails */}
          { errors.address && <span>This field is required</span> }

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default App
