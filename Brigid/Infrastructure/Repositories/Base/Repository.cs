using Domain.Repositories.Base;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories.Base
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly DatabaseContext _patientContext;

        public Repository(DatabaseContext patientContext)
        {
            _patientContext = patientContext;
        }

        public async Task<T> AddAsync(T entity, CancellationToken cancellationToken)
        {
            await _patientContext.Set<T>().AddAsync(entity, cancellationToken);
            await _patientContext.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(T entity, CancellationToken cancellationToken)
        {
            _patientContext.Set<T>().Remove(entity);
            await _patientContext.SaveChangesAsync(cancellationToken);
        }

        public async Task<IReadOnlyList<T>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await _patientContext.Set<T>().ToListAsync(cancellationToken);
        }

        public async Task<T> GetByIdAsync(int id, CancellationToken cancellationToken)
        {
            var result = await _patientContext.Set<T>().FindAsync(id, cancellationToken);
            if (result == null)
            {
                throw new NullReferenceException();
            }

            return result;
        }

        public Task UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
