import styles from "./styles.module.scss";

export const Layout = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) => {
  return (
    <>
      {header}
      <div className={styles.layout}>{children}</div>
    </>
  );
};
