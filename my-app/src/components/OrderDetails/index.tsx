import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
import ButtonLarge from "components/ButtonLarge";
import OrderItem from "components/OrderItem";
import { HTMLAttributes, useEffect, useState } from "react";
import { OrderItemType } from "types/OrderItemType";

type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
  orders: OrderItemType[];
} & OrderDetailsType;

function OrderDetails({ orders }: OrderDetailsProps) {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="Comer no Local" />
        <ButtonToggle active={false} value="P/ Viagem" />
        <ButtonToggle active={true} value="Delivery" />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.OrderDetailsListTitle>
          }
          list={
            Boolean(orders.length) ? (
              orders.map((item, index) => (
                <OrderItem
                  product={item.product}
                  quantity={item.quantity}
                  observation={item.observation}
                  key={`OrderDetails-${index}`}
                />
              ))
            ) : (
              <S.OrderDetailsListGap />
            )
          }
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ 10.00</span>
              </S.OrderDetailsListFooterRow>
              <ButtonLarge value="Continue para o pagamento" />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
}

export default OrderDetails;
