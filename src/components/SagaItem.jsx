function SagaItem({ item, handleDelete }) {
  return (
    <li className="saga-item">
      <span>{item.nom}</span>
      <button onClick={() => handleDelete(item.id)}>
        Supprimer de la liste
      </button>
    </li>
  );
}
export default SagaItem;
