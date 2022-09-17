using Application.Common.Models;
using MediatR;

namespace Application.Query.Queries
{
    public class GetAllPatientsQuery : IRequest<IReadOnlyList<PatientDto>>
    { }
}
