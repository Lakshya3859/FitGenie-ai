import { UserResource } from "@clerk/types";
import CornerElements from "./CornerElements";

const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;

  return (
    <div className="mb-10 relative backdrop-blur-sm border border-border p-6 rounded-lg min-h-[120px]">
      <CornerElements />

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
          {user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.fullName || "Profile"}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold text-primary">
                {user.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}

          {/* Active Status Dot */}
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background"></div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground truncate">
              {user.fullName}
            </h1>

            <div className="flex items-center bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded px-3 py-1 mt-2 md:mt-0">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></div>
              <p className="text-xs font-mono text-primary">USER ACTIVE</p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 my-2"></div>

          <p className="text-sm md:text-base text-muted-foreground font-mono truncate">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
