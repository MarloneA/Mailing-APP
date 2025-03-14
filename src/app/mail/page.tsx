import { cookies } from "next/headers";

import { Mail } from "@/components/mail";
import { accounts, mails } from "@/constants/mail";

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout?.value) : undefined;
  const defaultCollapsed = collapsed
    ? collapsed?.value !== "undefined" && JSON.parse(collapsed?.value)
    : undefined;

  return (
    <div>
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
}
