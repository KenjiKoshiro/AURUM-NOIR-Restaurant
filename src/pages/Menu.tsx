import { useState } from "react";
import { menuItems, filterMenu } from "../lib/menu";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const categories = [
    { id: "all", name: "Full Menu" },
    { id: "appetizer", name: "Starters" },
    { id: "main", name: "Mains" },
    { id: "dessert", name: "Desserts" },
    { id: "drink", name: "Drinks" },
  ];

  const dietaryOptions = [
    { id: "all", name: "All" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "gluten-free", name: "Gluten-Free" },
    { id: "spicy", name: "Spicy" },
  ];

  const filteredItems = filterMenu(
    menuItems,
    query,
    selectedCategory,
    dietaryFilter,
    sort,
  );

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 text-center">
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              color: "#C9A84C",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Culinary Programme
          </div>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "3.5rem",
              fontWeight: 300,
              color: "#F5F0E8",
              marginBottom: "1rem",
            }}
          >
            The Menu
          </h1>
          <div className="gold-line" style={{ marginBottom: "1.5rem" }} />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.78rem",
              color: "var(--muted)",
              lineHeight: 2,
              maxWidth: "520px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Seasonal ingredients, classical techniques, and bold imagination.
            Our menu evolves to honour nature's finest produce.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <label className="form-field">
            Search dishes or ingredients
            <input
              className="luxury-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try mushroom or lemon"
            />
          </label>
          <label className="form-field">
            Sort menu
            <select
              className="luxury-input"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Chef's order</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </label>
        </div>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Illustrative USD prices. Ranges sort by starting price. Dietary labels
          are sample information, not an allergy guarantee.
        </p>
        {/* Filters */}
        <div
          className="mb-14"
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.1)",
            paddingBottom: "2rem",
          }}
        >
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={selectedCategory === cat.id}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "8px 20px",
                    border:
                      selectedCategory === cat.id
                        ? "1px solid #C9A84C"
                        : "1px solid rgba(201,168,76,0.18)",
                    color:
                      selectedCategory === cat.id ? "#C9A84C" : "var(--muted)",
                    background:
                      selectedCategory === cat.id
                        ? "rgba(201,168,76,0.07)"
                        : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "rgba(201,168,76,0.2)",
              }}
              className="hidden md:block"
            />
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  aria-pressed={dietaryFilter === opt.id}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    border:
                      dietaryFilter === opt.id
                        ? "1px solid #C9A84C"
                        : "1px solid rgba(201,168,76,0.1)",
                    color:
                      dietaryFilter === opt.id ? "#C9A84C" : "var(--muted)",
                    background: "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
          <p role="status">{filteredItems.length} dishes found</p>
          <button
            className="btn-outline-gold px-5 py-3"
            onClick={() => {
              setQuery("");
              setSort("default");
              setSelectedCategory("all");
              setDietaryFilter("all");
            }}
          >
            Reset filters
          </button>
        </div>
        {filteredItems.length === 0 && (
          <p className="luxury-card p-8 mb-8">
            No dishes match your choices. Try another search or reset the
            filters.
          </p>
        )}
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="luxury-card p-7">
              <div className="flex items-start justify-between mb-3">
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#F5F0E8",
                    flex: 1,
                  }}
                >
                  {item.name}
                </h3>
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#C9A84C",
                    marginLeft: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.price}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {item.dietary.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.52rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.25)",
                        padding: "2px 8px",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="text-center"
          style={{
            borderTop: "1px solid rgba(201,168,76,0.1)",
            paddingTop: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              color: "var(--muted)",
              letterSpacing: "0.06em",
              lineHeight: 2,
            }}
          >
            Please inform your server of any allergies. Menu subject to seasonal
            change.
            <br />
            <span style={{ color: "var(--muted)" }}>
              Prices exclude tax and service.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
