import * as S from "./style";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { Outlet } from "react-router-dom";
import NavColumn from "components/NavColumn";

function Settings() {
  return (
    <S.Settings>
      <Menu active={RoutePath.SETTINGS} navItems={navigationItems} />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
            {/* Trecho precisa ser alterado posteriormente */}
            <NavColumn activeRoute={RoutePath.SETTINGS_USERS} />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
            <Outlet />
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
}

export default Settings;
