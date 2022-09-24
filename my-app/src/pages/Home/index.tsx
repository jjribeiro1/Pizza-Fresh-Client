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

function Home() {
  const dataDescription = DateTime.now().toLocaleString({
    ...DateTime.DATETIME_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
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
              <ProductItem />
            </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails />
      </aside>
      <Overlay/>
    </S.Home>
  );
}

export default Home;
