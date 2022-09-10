using Application.Common.Models;
using MediatR;

namespace Application.Command.Commands
{
    public class CreatePatientCommand : IRequest<PatientDto>
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
    }
}
