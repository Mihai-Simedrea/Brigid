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

        public async Task<T> AddAsync(T entity)
        {
            _patientContext.Set<T>().Add(entity);
            await _patientContext.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(T entity)
        {
            _patientContext.Set<T>().Remove(entity);
            await _patientContext.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _patientContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            var result = await _patientContext.Set<T>().FindAsync(id);
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
