import CheckboxIcon from "components/CheckboxIcon";
import OrderConfirmation from "components/OrderConfirmation";
import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";

import * as S from "./style";
import { HTMLAttributes, useState } from "react";
import { OrderItemType } from "types/OrderItemType";
import { OrderType } from "types/OrderType";
import { PaymentMethod } from "types/PaymentMethod";

type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  orders: OrderItemType[];
  selectedTable?: number;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onChangeActiveOrderType: (data: OrderType) => void;
  activeOrderType: OrderType;
  onCloseSection: () => void;
} & CheckoutSectionType;

function CheckoutSection({
  orders,
  selectedTable,
  onOrdersChange,
  onCloseSection,
  onChangeActiveOrderType,
  activeOrderType,
}: CheckoutSectionProps) {
  const [closing, setClosing] = useState<boolean>(false);
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>();

  const handleCloseSection = () => {
    setClosing(true);
    setTimeout(onCloseSection, 400);
  };

  return (
    <S.CheckoutSection closing={closing}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon onClick={handleCloseSection} />
        <OrderConfirmation orders={orders} onOrdersChange={onOrdersChange} />
      </S.CheckoutSectionConfirmation>
      <S.CheckoutSectionPayment>
        <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
        <S.CheckoutSectionPaymentSub>
          2 métodos de pagamento disponíveis
        </S.CheckoutSectionPaymentSub>
        <S.CheckoutSectionPaymentForm>
          <S.CheckoutSectionPaymentFormTitle>
            Método de Pagamento
          </S.CheckoutSectionPaymentFormTitle>
          <S.PaymentForm>
            <S.PaymentFormCheckbox>
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CARD)}
                active={activeMethod === PaymentMethod.CARD}
                value="Cartão"
                icon={<Card />}
              />
              <CheckboxIcon
                onClick={() => setActiveMethod(PaymentMethod.CASH)}
                active={activeMethod === PaymentMethod.CASH}
                value="Dinheiro"
                icon={<Cash />}
              />
            </S.PaymentFormCheckbox>
            {activeMethod === PaymentMethod.CARD && (
              <>
                <S.PaymentFormGroup>
                  <label htmlFor="titular">Titular do cartão</label>
                  <input
                    type="text"
                    name="titular"
                    id="titular"
                    placeholder="Marcus Silva"
                  />
                </S.PaymentFormGroup>

                <S.PaymentFormGroup>
                  <label htmlFor="card">Número do cartão</label>
                  <input
                    type="text"
                    name="card"
                    id="card"
                    placeholder="5369 7644 5393 3165"
                  />
                </S.PaymentFormGroup>

                <S.PaymentFormHalf>
                  <S.PaymentFormHalfItem>
                    <label htmlFor="validity">Validade</label>
                    <input
                      type="text"
                      name="card"
                      id="validity"
                      placeholder="09/2023"
                    />
                  </S.PaymentFormHalfItem>
                  <S.PaymentFormHalfItem>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" name="cvv" id="cvv" placeholder="218" />
                  </S.PaymentFormHalfItem>
                </S.PaymentFormHalf>
              </>
            )}
          </S.PaymentForm>
        </S.CheckoutSectionPaymentForm>
        <S.PaymentActions>
          <S.PaymentActionsDetails>
            <S.PaymentActionsDetailsOrderType>
              <label htmlFor="card">Tipo de pedido</label>
              <select
                onChange={({ target }) =>
                  onChangeActiveOrderType(target.value as OrderType)
                }
                name="order-type"
                id="order-type"
                value={Object.values(OrderType)
                  .filter((option) => option === activeOrderType)
                  .pop()}
              >
                {Object.values(OrderType).map((value, i) => (
                  <option key={`OrderType - ${i}`} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </S.PaymentActionsDetailsOrderType>
            <S.PaymentActionsDetailsTableNumber>
              <label htmlFor="card">Número da mesa</label>
              <input
                type="text"
                name="table"
                id="table"
                placeholder="01"
                disabled
                value={selectedTable}
              />
            </S.PaymentActionsDetailsTableNumber>
          </S.PaymentActionsDetails>

          <S.PaymentActionsButtonGroup>
            <S.PaymentActionsButtonGroupCancel>
              Cancelar
            </S.PaymentActionsButtonGroupCancel>
            <S.PaymentActionsButtonGroupConfirm>
              Confirmar Pagamento
            </S.PaymentActionsButtonGroupConfirm>
          </S.PaymentActionsButtonGroup>
        </S.PaymentActions>
      </S.CheckoutSectionPayment>
    </S.CheckoutSection>
  );
}

export default CheckoutSection;
