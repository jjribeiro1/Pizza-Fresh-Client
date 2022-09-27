import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { navigationItems } from "data/navigation";
import { RoutePath } from "types/routes";
import { DateTime } from "luxon";
import * as S from "./style";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";
import OrderDetails from "components/OrderDetails";
import { Overlay } from "components/Overlay/style";
import CheckoutSection from "components/CheckoutSection";
import { useNavigate } from "react-router-dom";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import { orders } from "mocks/orders";

function Home() {
  const dataDescription = DateTime.now().toLocaleString({
    ...DateTime.DATETIME_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (product: ProductResponse) => {};

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dataDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    onSelect={handleSelection}
                    key={`ProductItem-${index}`}
                  />
                ))}
            </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails orders={orders} />
      </aside>
      {/* <Overlay>
        <CheckoutSection />
      </Overlay> */}
    </S.Home>
  );
}

export default Home;
