interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
    children?: React.ReactNode
  }

  const button = (props: IButtonProps) => {
    return (
      <button ref={props.reference}>{props.children}</button>
    )
  }

  // ...

  <Button reference={props.reference}>
    {props.children}
  </Button>