import React from "react";
import PropTypes from "prop-types";
function Cart({ img, Cart, imgalt }) {
  return (
    <div className="cartSection">
      <img src={img} alt={imgalt} />
    </div>
  );
}
Cart.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};
Cart.defaultProps = {
  img:
    "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9ImZpbGxlZF9vdXRsaW5lIiBkYXRhLW5hbWU9ImZpbGxlZCBvdXRsaW5lIj48ZyBmaWxsPSIjNDI4ZGM1Ij48cGF0aCBkPSJtMTI4IDg3LjYydjU2LjM4YTggOCAwIDAgMSAtMTYgMHYtNTYuMzhhMTEuOTkzIDExLjk5MyAwIDAgMCAtOS4wOS0xMS42NWwtMjguMTQtNy4wNC01Mi43MS0xMy4xN2E4IDggMCAxIDEgMy44OC0xNS41Mmw1Mi43MSAxMy4xNyAyOC4xNCA3LjA0YTI3Ljk1NiAyNy45NTYgMCAwIDEgMjEuMjEgMjcuMTd6Ii8+PHBhdGggZD0ibTQ4OCA0NTZoLTMzNmE0MC4wNDUgNDAuMDQ1IDAgMCAxIC00MC00MHYtNDhhOCA4IDAgMCAxIDE2IDB2NDhhMjQuMDI3IDI0LjAyNyAwIDAgMCAyNCAyNGgzMzZhOCA4IDAgMCAxIDAgMTZ6Ii8+PHBhdGggZD0ibTQ3NCAxMzZoLTM3MGE4IDggMCAwIDAgLTggOHYyMDYuNzgzYTIyLjAxMSAyMi4wMTEgMCAwIDAgMjEuOTY3IDIyIDIyLjE4MSAyMi4xODEgMCAwIDAgNC41Mi0uNDY4bDE3NS4xNTUtMzYuNDkgMTgwLjg0NS0zNy42NzZhMjIuMDkxIDIyLjA5MSAwIDAgMCAxNy41MTMtMjEuNTMzdi0xMTguNjE2YTIyLjAyNSAyMi4wMjUgMCAwIDAgLTIyLTIyem02IDE0MC42MTZhNS45NTcgNS45NTcgMCAwIDEgLTEuMDc5IDMuMzg0aC0zMC45MjF2LTMyaDMyem0tMjIzLjM3NyA1MS40MTVjLS4yMDYtLjAxNS0uNDEzLS4wMzEtLjYyMy0uMDMxdi0zMmgzMnYyNS41em0tNDguNjIzLTQ4LjAzMXYtMzJoMzJ2MzJ6bTMyIDE2djMyaC0zMnYtMzJ6bS04MC00OGgzMnYzMmgtMzJ6bS0xNiAzMmgtMzJ2LTMyaDMyem0xOTItNDhoLTMydi0zMmgzMnptMTYtMzJoMzJ2MzJoLTMyem0tNjQgMzJoLTMydi0zMmgzMnptLTQ4IDBoLTMydi0zMmgzMnptMTYgMTZoMzJ2MzJoLTMyem00OCAwaDMydjMyaC0zMnptNDggMGgzMnYzMmgtMzJ6bTQ4IDBoMzJ2MzJoLTMyem0wLTE2di0zMmgzMnYzMnptMC00OHYtMzJoMzJ2MzJ6bS0xNiAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bTAgMTZ2MzJoLTMydi0zMnptLTQ4IDMyaC0zMnYtMzJoMzJ6bS0zMiA2NGgzMnYzMmgtMzJ6bTQ4IDBoMzJ2MzJoLTMyem0xOS45NzQgNDgtMTkuOTc0IDQuMTYxdi00LjE2MXptMTI0LjAyNi00OGgzMnYxNS41bC0zMiA2LjY2NnptNDggMGgzMnY1LjVsLTMyIDYuNjY2em00OCAwaDEwLjM3NGwtMTAuMzc0IDIuMTYxem00OC02NHYtMzJoMzJ2MzJ6bTMyLTc0djI2aC0zMnYtMzJoMjZhNi4wMDYgNi4wMDYgMCAwIDEgNiA2em0tMzM2LTZ2MzJoLTMydi0zMnptLTI0Ljc3NiAyMDQuNjU2YTYgNiAwIDAgMSAtNy4yMjQtNS44NzN2LTYuNzgzaDMydjcuNXoiLz48L2c+PGNpcmNsZSBjeD0iMjQwIiBjeT0iNDQ4IiBmaWxsPSIjYzc0NjNiIiByPSI0MCIvPjxjaXJjbGUgY3g9IjI0MCIgY3k9IjQ0OCIgZmlsbD0iI2Q5ZDlkOSIgcj0iMTYiLz48Y2lyY2xlIGN4PSI0MTYiIGN5PSI0NDgiIGZpbGw9IiNjNzQ2M2IiIHI9IjQwIi8+PGNpcmNsZSBjeD0iNDE2IiBjeT0iNDQ4IiBmaWxsPSIjZDlkOWQ5IiByPSIxNiIvPjxwYXRoIGQ9Im03OC42NSA1My40MS0zLjg4IDE1LjUyLTUyLjcxLTEzLjE3YTggOCAwIDEgMSAzLjg4LTE1LjUyeiIgZmlsbD0iI2M3NDYzYiIvPjxwYXRoIGQ9Im0yNDAgNDcyYTI0IDI0IDAgMSAwIC0yNC0yNCAyNC4wMjcgMjQuMDI3IDAgMCAwIDI0IDI0em0wLTMyYTggOCAwIDEgMSAtOCA4IDguMDA5IDguMDA5IDAgMCAxIDgtOHoiLz48cGF0aCBkPSJtNDE2IDQ3MmEyNCAyNCAwIDEgMCAtMjQtMjQgMjQuMDI3IDI0LjAyNyAwIDAgMCAyNCAyNHptMC0zMmE4IDggMCAxIDEgLTggOCA4LjAwOSA4LjAwOSAwIDAgMSA4LTh6Ii8+PHBhdGggZD0ibTIyLjA2IDU1Ljc2MSA4MC44NTEgMjAuMjEzYTExLjk4MyAxMS45ODMgMCAwIDEgOS4wODkgMTEuNjQydjQ4LjM4NGgtOGE4IDggMCAwIDAgLTggOHYyMDYuNzgzYTIxLjk4MSAyMS45ODEgMCAwIDAgMTYgMjEuMTZ2NDQuMDU3YTQwLjA0NSA0MC4wNDUgMCAwIDAgNDAgNDBoNDAuNjc5YTQ4LjA3MyA0OC4wNzMgMCAwIDAgNDcuMjkyIDQwYy45MDYgMCAxLjgyMS0uMDI1IDIuNzM3LS4wNzdhNDguMDc2IDQ4LjA3NiAwIDAgMCA0NC42MTItMzkuOTIzaDgwLjY4Yy4yMjcgMCAuNDUxLS4wMTUuNjczLS4wMzRhNDcuOTkxIDQ3Ljk5MSAwIDAgMCA5NC42NDguMDM0aDI0LjY3OWE4IDggMCAwIDAgMC0xNmgtMjQuNjc5YTQ3Ljk5MSA0Ny45OTEgMCAwIDAgLTk0LjY0OC4wMzRjLS4yMjItLjAxOS0uNDQ2LS4wMzQtLjY3My0uMDM0aC04MC42NzdhNDcuOTkxIDQ3Ljk5MSAwIDAgMCAtOTQuNjQzIDBoLTQwLjY4YTI0LjAyNyAyNC4wMjcgMCAwIDEgLTI0LTI0di00NC44MjhsMzUwLjQ4Ny03My4wMThhMjIuMDkxIDIyLjA5MSAwIDAgMCAxNy41MTMtMjEuNTM4di0xMTguNjE2YTIyLjAyNSAyMi4wMjUgMCAwIDAgLTIyLTIyaC0zNDZ2LTQ4LjM4NGEyNy45NTkgMjcuOTU5IDAgMCAwIC0yMS4yMDktMjcuMTY0bC04MC44NTEtMjAuMjEzYTggOCAwIDEgMCAtMy44OCAxNS41MjJ6bTM5My45NCAzNjAuMjM5YTMyIDMyIDAgMSAxIC0zMiAzMiAzMi4wMzYgMzIuMDM2IDAgMCAxIDMyLTMyem0tMTc3LjgwNi4wNTFhMzIgMzIgMCAxIDEgLTMwLjE0MyAzMy43NTQgMzIuMDM3IDMyLjAzNyAwIDAgMSAzMC4xNDMtMzMuNzU0em0tOTQuMTk0LTI2NC4wNTF2MzJoLTMydi0zMnptMzM2IDgwaC0zMnYtMzJoMzJ6bTAgNDQuNjE2YTUuOTU3IDUuOTU3IDAgMCAxIC0xLjA3OSAzLjM4NGgtMzAuOTIxdi0zMmgzMnptLTIyMy4zNzcgNTEuNDE1Yy0uMjA2LS4wMTUtLjQxMy0uMDMxLS42MjMtLjAzMXYtMzJoMzJ2MjUuNXptLTEzNy40IDI4LjYyNWE2IDYgMCAwIDEgLTcuMjIzLTUuODczdi02Ljc4M2gzMnY3LjV6bTI2NC43NzctNzYuNjU2aC0zMnYtMzJoMzJ6bTE2LTMyaDMydjMyaC0zMnptLTI1NiAzMmgtMzJ2LTMyaDMyem0xNi0zMmgzMnYzMmgtMzJ6bS0xNiA0OHYzMmgtMzJ2LTMyem0xNiAwaDMydjMyaC0zMnptNDggMGgzMnYzMmgtMzJ6bTAtMTZ2LTMyaDMydjMyem00OC0zMmgzMnYzMmgtMzJ6bTQ4IDBoMzJ2MzJoLTMyem00OC0xNnYtMzJoMzJ2MzJ6bS0xNiAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bTE2IDExMmgxOS45NzRsLTE5Ljk3NCA0LjE2MXptMTQ0LTQ4aDMydjE1LjVsLTMyIDYuNjY2em00OCAwaDMydjUuNWwtMzIgNi42NjZ6bTQ4IDBoMTAuMzc0bC0xMC4zNzQgMi4xNjF6bTMyLTY0aC0zMnYtMzJoMzJ6bS0zMi00OHYtMzJoMzJ2MzJ6bS0xNiAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bS00OCAwaC0zMnYtMzJoMzJ6bTI4OC0yNnYyNmgtMzJ2LTMyaDI2YTYuMDA2IDYuMDA2IDAgMCAxIDYgNnoiLz48L2c+PC9zdmc+",
  imgalt: "Cart Image",
};
export default Cart;
