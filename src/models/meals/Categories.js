import React, { useEffect } from "react";
import NavPills from "../../components/NavPills";
import NavLink from "../../components/NavLink";
import { PUBLIC_ROUTES } from "../../publicRoutes";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions";

function Categories(props) {
  useEffect(() => {
    props.fetchCategories();
  });
  return (
    <>
      <NavPills>
        {props.categories.map((categorie, key) => {
          return (
            <NavLink
              key={key}
              to={PUBLIC_ROUTES.mealsByCategoryPage.getPath(
                categorie.strCategory
              )}
            >
              {categorie.strCategory}
            </NavLink>
          );
        })}
      </NavPills>
      );
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories })(Categories);
