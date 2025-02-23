import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody } from "@heroui/card";

import styles from "./styles.module.css";

import { siteConfig } from "@/config/site";
export default function DashboardPage() {
  return (
    <section
      style={{ height: "100%" }}
      className="flex flex-col items-center gap-4"
    >
      <Card className={styles.card}>
        <CardBody className={styles.cardBody}>
          <Image alt="Nash's Little Threads" src="/Nash-logo.png" width={700} />
        </CardBody>
      </Card>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.facebook}
        >
          Facebook
        </Link>
      </div>
    </section>
  );
}
