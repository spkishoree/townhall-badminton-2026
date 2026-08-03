import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPlayer } from "../services/playerService";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    category: "Men's Singles",
    partner_name: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 3) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    if (
      form.category === "Men's Doubles" &&
      form.partner_name.trim() === ""
    ) {
      alert("Please enter your partner name.");
      return;
    }

    try {
      setLoading(true);

      await registerPlayer(form);

      toast.success("Registration Successful!");

      navigate("/participants");
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Tournament Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="font-semibold">Full Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="font-semibold">Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="font-semibold">Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option>Men's Singles</option>
              <option>Men's Doubles</option>
            </select>
          </div>

          {form.category === "Men's Doubles" && (
            <div>
              <label className="font-semibold">
                Partner Name
              </label>

              <input
                type="text"
                name="partner_name"
                value={form.partner_name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Partner Name"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-lg py-3 text-lg font-bold"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>
      </div>
    </div>
  );
}