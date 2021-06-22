interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
  }

  const button = (props: IButtonProps) => {
    return (
      <button ref={props.reference} />
    )
  }

  // ...

  // <Button reference={props.reference} />