import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Tabs({ id }) {
  const router = useRouter();
  const isCatDetailPage = router.pathname === `/cats/${id}`;
  const isRecommendPage = router.pathname === `/cats/recommendations/${id}`;
  return (
    <>
      <div>
        <Link href={`/cats/${id}`}>
          <FontAwesomeIcon
            icon={faPaw}
            color={
              isCatDetailPage
                ? "var(--tab-icon-active)"
                : "var(--tab-icon-inactive)"
            }
          />
        </Link>

        <Link href={`/cats/recommendations/${id}`}>
          <FontAwesomeIcon
            icon={faPaw}
            color={
              isRecommendPage
                ? "var(--tab-icon-active)"
                : "var(--tab-icon-inactive)"
            }
          />
        </Link>
      </div>
    </>
  );
}
