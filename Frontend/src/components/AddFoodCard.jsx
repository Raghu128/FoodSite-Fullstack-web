import { useNavigate } from "react-router-dom";

function AddFoodCard() {
  const navigate = useNavigate();
    
  return (
    <div className="card-titles" data-aos="fade-up">
      <div className="add-food-item" onClick={() => navigate("/addFood")}>
        <div className="add-food-logo">
          <img
            src="https://imgs.search.brave.com/S97nPVOQjNGgKYnYpTWeyldi3i-N3BG9YIRJoZFR73A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy9zb3lsZW50LXJl/ZC9wbHVzLXhsLnBu/Zw"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default AddFoodCard;
