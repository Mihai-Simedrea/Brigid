namespace Domain.Repositories.Base
{
    public interface IRepository <T> where T : class
    {
        Task<IReadOnlyList<T>> GetAllAsync(CancellationToken cancellationToken);
        Task<T> GetByIdAsync(int id, CancellationToken cancellationToken);
        Task<T> AddAsync(T entity, CancellationToken cancellationToken);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity, CancellationToken cancellationToken);
    }
}
